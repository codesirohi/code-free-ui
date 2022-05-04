import { ColumnHeader } from "./ColumnHeader.model";
import { ColumnString } from "./ColumnString.model";
import { DataTemplate } from "./DataTemplate.model";
import { Endpoint } from "./Endpoint.model";
import { Filter } from "./Filter.model";
import { Operation } from "./Operation.model";
import { SectionAttribute } from "./SectionAttribute.model";

export class Section{
    public Id : number;
    public FormId : number;
    public SectionName: string;
    public SectionAttributes: Array<SectionAttribute>;
    public SectionTypeName : string;
    protected Columns? : Array<ColumnHeader>;
    ColumnString? : Array<ColumnString>;
    public CarryForwardToChild?: Array<any>;
    Filter : Filter;
    public UniqueKeys? : Array<string>;
    public DisplayOrder? : number;
    Operations : Array<Operation>;
    public SubSections : Array<Section>;
    public BaseEntityId: number;
    public IsMultiplicity: boolean;
    public ParentSectionId : number;
    public CssClassName ?: string;
    public ModelCollectionName ?: string;
    public ModelObjectName? :string;
    public Endpoint: Endpoint;
    public DataTemplates : Array<DataTemplate>
    constructor(){}
}