export class Employee {
  id: number;
  name: string;
  phone: string;
  officeNumber: string;
  position: string;
  manager: string;
  companyImage: string;
  constructor(
    id: number,
    name: string,
    phone: string,
    officeNumber: string,
    position: string,
    manager: string,
    companyImage: string,
  ) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.officeNumber = officeNumber;
    this.position = position;
    this.manager = manager;
    this.companyImage = companyImage;
  }
}
