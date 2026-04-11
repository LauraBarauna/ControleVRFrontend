import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PROFILE_ROUTES } from './profile.routes';
import { ReadProfile } from './components/read-profile/read-profile';

@NgModule({
    imports: [
      RouterModule.forChild(PROFILE_ROUTES),
      ReadProfile
    ]
})
export class ProfileModule {}
