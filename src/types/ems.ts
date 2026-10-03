export type FormStatus = 'Submitted' | 'Not Submitted';
export type Approval = 'Approved' | 'Pending Review' | 'Rejected';
export type AdmitStatus = 'Generated' | 'Not Generated' | 'Regeneration Required' | 'Not Eligible';
export interface Student { id:string; roll:string; name:string; father:string; dob:string; programme:string; semester:string; formStatus:FormStatus; photo:boolean; signature:boolean; approval:Approval; admit:AdmitStatus; match:string; submittedOn?:string; source:string; }
export interface Issue { id:string; type:string; severity:'High'|'Medium'|'Low'; student:string; detail:string; received:string; college:string; form:string; }
