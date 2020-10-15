import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'register', // este se exporta al archivo html como <register></register>
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService],
})
export class RegisterComponent implements OnInit {
  public page_title: string; //crear titulo y pasarle usuario para el registro
  public user: User;
  public status: string;

  constructor(private _userService: UserService) {
    this.page_title = 'Registrate'; //pasarle cada objeto a como se rellene en el formulario
    this.user = new User('', '', '', '', '', '', 'ROLE_USER');
  }

  ngOnInit(): void {
    console.log(this._userService.prueba());
  }

  onSubmit(form) {
    this._userService.register(this.user).subscribe(
      (response) => {
        if (response.user && response.user._id) {
          this.status = 'success';
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
