import type { IFilterSection } from "./IFilterSection";
import type { IHeader } from "./IHeader";
import type { ISectionParts } from "./ISection";

export interface IMainPorps{
    header: IHeader;
    filterSection: IFilterSection;
    section: ISectionParts
}