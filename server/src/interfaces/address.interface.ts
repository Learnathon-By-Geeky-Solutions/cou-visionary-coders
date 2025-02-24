type Address = {
  village: string;
  subdistrict: string;
  district: string;
};

export type AddressInfo = {
  permanentAddress: Address;
  presentAddress: Address;
};
