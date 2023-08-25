export type StatusTypes = 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETE' | 'CANCELLED' | 'PAID' | 'DEFAULT' | string;

export type PaginationTypes = 'after' | 'before' | '';

export interface AppointmentServiceProps {
	getAppointments: ({size, cursor, type}:{size: number, cursor: string, type: string}) => Promise<AppointmentsProps>,
}

export interface AppointmentsProps {
  edges: Array<EdgesProps>,
  pageInfo: PageInfoProps,
}

export interface EdgesProps {
  cursor?: string,
  node?: AppointmentProps,
}

export interface AppointmentProps {
  duration: number,
  id: string,
  paymentId: string,
  scheduledTime: string,
  status: StatusTypes,
  userId: string,
  workOrder: WorkOrederProps,
}

export interface WorkOrederProps {
  service: string
}

export interface PageInfoProps {
  hasNextPage?: boolean,
  hasPreviousPage?: boolean,
  nextCursor?: string,
  previousCursor?: string,
}
