
export interface Notification {
  Type: NotificationType,
  ClaimStatusNotificationDetails: ClaimStatusNotificationDetails
}

export interface ClaimStatusNotificationDetails {
  ClaimStatus?: string,
  PatientFullName?: string,
  Scheme?: string,
  ClaimedAmount?: number,
  AcceptedAmount?: number,
  BalanceAmount?: number,
  InboxItemId?: string
}

export enum NotificationType {
  CLAIM_STATUS_NOTIFICATION = 'CLAIM_STATUS_NOTIFICATION'
}
