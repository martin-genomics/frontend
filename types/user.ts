



export interface UserType {
    id              :string;
    firstName       :string;
    lastName        :string;
    email           :string;
    picture         :string;
    type            :'client' | 'freelancer';
    isEmailVerified :boolean;
    password        :string;
    membership      : 'basic' | 'professional';
    updated         :Date;
    createdAt       :Date;
  
}