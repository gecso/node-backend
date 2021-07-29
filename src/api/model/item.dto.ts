import { OmitType, PartialType } from "@nestjs/swagger";

export enum ItemStatus {
    Active = 1,
    Completed = 2,
    Removed = -1
}

export class ItemDto {
    id: string;
    name: string;
    title?: string;
    status: ItemStatus;    
}

export class ItemCreateDto extends OmitType(ItemDto, ['id'] as const) { }
export class ItemUpdateDto extends PartialType(ItemCreateDto) { }
