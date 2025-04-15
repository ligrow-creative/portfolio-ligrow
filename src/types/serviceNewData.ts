type TypeBtn = {
  title: string;
  btn_txt1: string;
  btn_txt2: string;
  price: number;
  note: string;
}

type ServiceNewBtn = {
  logo: TypeBtn;
  photo: TypeBtn;
  animation: TypeBtn;
  hurry: TypeBtn;
  update: TypeBtn;
}

type ServiceNewPlan = {
  title: string;
  price: number;
  detail: string;
  target: string;
  feature: string[];
  tag: boolean;
}

export type { ServiceNewBtn, TypeBtn, ServiceNewPlan };
