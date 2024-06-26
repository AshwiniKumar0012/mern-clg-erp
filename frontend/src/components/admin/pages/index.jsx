// admin management by admin
export { default as  CreateAdmin} from './manageAdmin/CreateAdmin';
export { default as  GetAdmin} from './manageAdmin/GetAdmin';

// faculty management by admin
export { default as  AddFaculty} from './manageFaculty/AddFaculty';
export { default as  GetFaculty} from './manageFaculty/GetFaculty';

// student management by student
export { default as  AddStudent} from './manageStudent/AddStudent';
export { default as  GetStudent} from './manageStudent/GetStudent';

// others management by admin
export { default as  AddDepartment} from './manageOthers/AddDepartment';
export { default as  CreateNotice} from './manageOthers/CreateNotice';
export { default as  AddSubject} from './manageOthers/AddSubject';
export { default as  GetSubject} from './manageOthers/GetSubject';
export { default as  GetNotice} from './manageOthers/GetNotice';
