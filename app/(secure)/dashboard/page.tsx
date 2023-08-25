"use client";

import { useEffect, useState } from "react";
import { DateValueType } from "react-tailwindcss-datepicker";

import List from "@/components/List";
import Availability from "@/components/Availability";

import { APPOINTMENTS_QUANTITY } from "@/constants/index";
import { getTomorrow, getYyyyMmDd } from "@/helpers/client/utils";
import { EdgesProps, PageInfoProps, PaginationTypes } from "@/helpers/types";

import useAppointmentService from "@/services/useAppointmentService";
import useAvailabilityService from "@/services/useAvailabilityService";

const tomorrowDate = getTomorrow();

const getAppointments = (config:{size:number, cursor: string, type: string}) => {
	const appointmentService = useAppointmentService();
	return appointmentService.getAppointments(config);
}

const getAvailability = (date: string = '') => {
	const availabilityService = useAvailabilityService();
	return availabilityService.getAvailability(date);
}

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState<DateValueType>({
    startDate: tomorrowDate,
    endDate: tomorrowDate,
  });

  const handleValueChange = (newDate: DateValueType) => {
    if(newDate?.startDate && newDate?.endDate){
      setSelectedDate(newDate); 
    } else {
      setAvailability([])
    }
  }

  const [availability, setAvailability] = useState<string[]>([]);
  const [appointments, setAppointments] = useState<EdgesProps[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfoProps>({
    hasNextPage: true,
    hasPreviousPage:false,
    nextCursor: '',
    previousCursor: '',
  });

  useEffect(()=>{
    const newDate = getYyyyMmDd(selectedDate?.startDate?.toString()||'');
    getAvailability(newDate).then((response) => {
      setAvailability(response);
    });
  }, [selectedDate]);

  const handleGetAppointments = (type: PaginationTypes = '') => {
    let configuration = {
      size: APPOINTMENTS_QUANTITY,
      cursor: '',
      type: '',
    }

    if(type){
      const pageCursor = (type === 'after' ? pageInfo?.nextCursor : pageInfo?.previousCursor) || '';
      configuration = {
        size: APPOINTMENTS_QUANTITY,
        cursor: pageCursor,
        type,
      }
    }
    getAppointments(configuration).then((response) => {
      setAppointments(response?.edges);
      setPageInfo(response?.pageInfo);
    });
  }

  useEffect(()=>{
    handleGetAppointments();
  }, []);

  return (
    <div className="w-full items-center font-mono text-sm grid gap-2 lg:justify-center lg:px-0 px-8">
      <div className='grid grid-flow-row gap-10'>
        <Availability data={availability} selectedDate={selectedDate} handleSelectDate={handleValueChange} />
        <List data={appointments} handlePagination={handleGetAppointments} pageInfo={pageInfo} />
      </div>
    </div>
  )
}

export default Dashboard;
