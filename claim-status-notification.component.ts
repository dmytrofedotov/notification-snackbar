import { Component, Inject, OnInit } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from "@angular/material/snack-bar";
import { Notification } from './notification.model';
// import { DialogButton, DialogButtonStyle, DialogOptions, DialogType, OK_BUTTON } from "../../models/dialog-models";

@Component({
  selector: 'meraki-flux-claim-status-notification',
  templateUrl: './claim-status-notification.component.html',
  styleUrls: ['./claim-status-notification.component.scss']
})
export class ClaimStatusNotificationComponent implements OnInit {

  // @Input() onBeforeCloseCallback: (buttonId: string) => Promise<boolean>;
  // @Input() onCloseCallback: (buttonId: string) => Promise<any>;
  //
  //
  get typeClass() {
  //   switch (this.dialogData.type) {
  //     case DialogType.ERROR:
  //       return 'danger';
  //     case DialogType.QUESTION:
  //       return 'success';
  //     case DialogType.WARNING:
  //       return 'warning'
  //     case DialogType.INFO:
  //     default:
        return 'info';
  //   }
  }
  //
  get typeIcon() {
  //   switch (this.dialogData.type) {
  //     case DialogType.ERROR:
  //     case DialogType.WARNING:
  //       return 'warning_amber';
  //     case DialogType.QUESTION:
  //       return 'help_outline';
  //     case DialogType.INFO:
  //     default:
        return 'info_outline';
  //   }
  }
  //
  // getButtonColor(button: DialogButton) {
  //   switch (button.style) {
  //     case DialogButtonStyle.PRIMARY:
  //       return 'primary';
  //     case DialogButtonStyle.SECONDARY:
  //     default:
  //       return 'secondary';
  //     case DialogButtonStyle.DANGER:
  //       return 'danger';
  //     case DialogButtonStyle.SUCCESS:
  //       return 'success';
  //   }
  // }
  //
  // get buttons() {
  //   const firstPrimary = this.dialogData.buttons.findIndex(btn => btn.primaryAction);
  //
  //   return this.dialogData.buttons?.map((btn, idx) => {
  //     if (idx !== firstPrimary) {
  //       btn.primaryAction = false;
  //     }
  //     return btn;
  //   }) || [OK_BUTTON];
  // }
  //
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: Notification) { }

  ngOnInit(): void {
  }

  // protected async onDialogClose(button: DialogButton) {
  //   const dialogRef = this.injector.get(MatDialogRef<ClaimStatusNotificationComponent>);
  //
  //   if (this.onBeforeCloseCallback) {
  //     const canClose = await this.onBeforeCloseCallback(button.id);
  //     if (canClose === false) {
  //       return;
  //     }
  //   }
  //
  //   let data;
  //
  //   if (this.onCloseCallback) {
  //     data = await this.onCloseCallback(button.id);
  //   }
  //
  //   if (data) {
  //     dialogRef.close({
  //       id: button.id,
  //       data
  //     })
  //   } else {
  //     dialogRef.close(button)
  //   }
  // }
  //
  // onEnter(button: DialogButton) {
  //   if (button.primaryAction) {
  //     this.onDialogClose(button);
  //   }
  // }

}
