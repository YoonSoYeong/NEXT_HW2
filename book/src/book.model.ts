export interface BookDto {
  id: string;
  title: string;
  writer: string;
  createdDt?: Date;
  updatedDt?: Date;
  isAvailable: boolean;
}
// 여기사 ?는 사용안될 수도 있어서 null일수도//
