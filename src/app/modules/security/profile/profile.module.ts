import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PROFILE_ROUTES } from './profile.routes';
import { ReadProfile } from './components/users/read-user/read-profile';
import { ProfileService } from './services/profile.service';

@NgModule({
  imports: [
    RouterModule.forChild(PROFILE_ROUTES),
    ReadProfile
  ],
  providers: [ProfileService],
})
export class ProfileModule {}
