import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateContactPageRoutingModule } from './update-contact-routing.module';

import { UpdateContactPage } from './update-contact.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateContactPageRoutingModule
  ],
  declarations: [UpdateContactPage]
  if(count($_POST)>0){
    $user = ReservationData::getById($_POST["id"]);
    $user->title = $_POST["title"];
    $user->pacient_id = $_POST["userName"];;
    $user->time_at = $_POST["time_at"];
    $user->note = $_POST["note"];
    $user->update();
  
  Core::alert("Actualizado exitosamente!");
  print "<script>window.location='index.php?view=reservations';</script>";
  
  
  }
})
export class UpdateContactPageModule {}

