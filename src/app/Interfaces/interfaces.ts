
export interface Root {
    Id: number
    FormName: string
    Menu: string
    IsHistory: boolean
    FormType: number
    GridColumns: GridColumn[]
    Sections: Section[]
    TenantId: number
    BaseEntityId: number
    ModuleId: number
    BaseFormId: number
    EndPoint: EndPoint
  }
  
  export interface GridColumn {
    ColumnName: string
    FQModelName: string
    ToPublish: boolean
    IsSortable: boolean
    FQSortableField: string
    ColumnHeader?: string
  }
  
  export interface Section {
    Id: number
    FormId: number
    SectionName: string
    SectionAttributes: SectionAttribute[]
    SubSections: any[]
    BaseEntityId: number
    DisplayOrder: number
    IsMultiplicity: boolean
    CssClassName: string
    Operations: any
    ParentSectionId: number
  }
  
  export interface SectionAttribute {
    Id: number
    AttributeId: number
    LabelName: string
    ControlName: string
    ControlType: string
    ValueType: string
    Events: any[]
    CurrentValue: string
    CssClassName: string
    Title: string
    Validators: any[]
    RouteEntry?: string
  }
  
  export interface EndPoint {
    EndpointAddress: string
    Id: number
    Protocol: string
    ReturnType: string
    Version: string
    IsAuthenticated: string
    IsAuthorize: string
    Headers: Header[]
  }
  
  export interface Header {
    KeyName: string
    ValueName: string
  }
  