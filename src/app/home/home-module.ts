// home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing-module';
import { Home } from './home';
import { Tabla } from './tabla/tabla';
import { TablaExpansion } from './tabla-expansion/tabla-expansion';
import { TablaFilasEstaticas } from './tabla-filas-estaticas/tabla-filas-estaticas';
import { TablaFiltros } from './tabla-filtros/tabla-filtros';
import { TablaPaginacion } from './tabla-paginacion/tabla-paginacion';
import { Tree } from './tree/tree';
import { PanelAcordeon } from './panel-acordeon/panel-acordeon';
import { PanelCard } from './panel-card/panel-card';
import { PanelFieldset } from './panel-fieldset/panel-fieldset';
import { Panel } from './panel/panel';

// PrimeNG Modules
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { TabsModule } from 'primeng/tabs';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BlockUIModule } from 'primeng/blockui';
import { DatePickerModule } from 'primeng/datepicker';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DrawerModule } from 'primeng/drawer';
import { DockModule } from 'primeng/dock';
import { DragDropModule } from 'primeng/dragdrop';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { FocusTrapModule } from 'primeng/focustrap';
import { GalleriaModule } from 'primeng/galleria';
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { TextareaModule } from 'primeng/textarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputOtpModule } from 'primeng/inputotp';
import { ImageModule } from 'primeng/image';
import { ImageCompareModule } from 'primeng/imagecompare';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { MeterGroupModule } from 'primeng/metergroup';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OrderListModule } from 'primeng/orderlist';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ScrollerModule } from 'primeng/scroller';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { SpeedDialModule } from 'primeng/speeddial';
import { SplitterModule } from 'primeng/splitter';
import { StepperModule } from 'primeng/stepper';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepsModule } from 'primeng/steps';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TooltipModule } from 'primeng/tooltip';
import { Tooltip } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeTableModule } from 'primeng/treetable';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AutoFocusModule } from 'primeng/autofocus';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { PopoverModule } from 'primeng/popover';

import { ConfirmationService, MessageService } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';
import { CdkDragPlaceholder } from "@angular/cdk/drag-drop";
import { PanelTab } from './panel-tab/panel-tab';
import { OverlayDialog } from './overlay-dialog/overlay-dialog';
import { OverlayPopup } from './overlay-popup/overlay-popup';
import { OverlayModal } from './overlay-modal/overlay-modal';
import { OverlayDrawer } from './overlay-drawer/overlay-drawer';
import { OverlayPopover } from './overlay-popover/overlay-popover';
import { OverlayTooltip } from './overlay-tooltip/overlay-tooltip';
import { UploadFile } from './upload-file/upload-file';
import { Login } from './login/login';
import { NotFound } from './not-found/not-found';
import { Unauthorized } from './unauthorized/unauthorized';
import { AutoComplete } from './form/auto-complete/auto-complete';
import { CascadaSelect } from './form/cascada-select/cascada-select';
import { Checkbox } from './form/checkbox/checkbox';
import { DatePicker } from './form/date-picker/date-picker';
import { Fluid } from "primeng/fluid";
import { InputMask } from './form/input-mask/input-mask';
import { InputNumber } from './form/input-number/input-number';
import { InputOtp } from './form/input-otp/input-otp';
import { InputText } from './form/input-text/input-text';
import { KeyFilter } from './form/key-filter/key-filter';
import { ListBox } from './form/list-box/list-box';
import { MultiSelect } from './form/multi-select/multi-select';
import { InputPassword } from './form/input-password/input-password';
import { RadioButton } from './form/radio-button/radio-button';
import { InputSelect } from './form/input-select/input-select';
import { InputTextarea } from './form/input-textarea/input-textarea';
import { BotonAlternar } from './form/boton-alternar/boton-alternar';
import { Switch } from './form/switch/switch';
import { Botones } from './form/botones/botones';
import { Filtros } from './filtros/filtros';

@NgModule({
  declarations: [
    Home,
    Tabla,
    Tree,
    TablaPaginacion,
    TablaFiltros,
    TablaExpansion,
    TablaFilasEstaticas,
    PanelAcordeon,
    PanelCard,
    PanelFieldset,
    Panel,
    PanelTab,
    OverlayDialog,
    OverlayPopup,
    OverlayModal,
    OverlayDrawer,
    OverlayPopover,
    OverlayTooltip,
    UploadFile,
    Login,
    NotFound,
    Unauthorized,
    AutoComplete,
    CascadaSelect,
    Checkbox,
    DatePicker,
    InputMask,
    InputNumber,
    InputOtp,
    InputText,
    KeyFilter,
    ListBox,
    MultiSelect,
    InputPassword,
    RadioButton,
    InputSelect,
    InputTextarea,
    BotonAlternar,
    Switch,
    Botones,
    Filtros
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    MenubarModule,
    ButtonModule,
    TableModule,
    ToolbarModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    TagModule,
    MultiSelectModule,
    SelectModule,
    SliderModule,
    ProgressBarModule,
    AvatarModule,
    AvatarGroupModule,
    AnimateOnScrollModule,
    TabsModule,
    AccordionModule,
    AutoCompleteModule,
    BadgeModule,
    BreadcrumbModule,
    BlockUIModule,
    ButtonGroupModule,
    DatePickerModule,
    CarouselModule,
    CascadeSelectModule,
    ChartModule,
    CheckboxModule,
    ChipModule,
    ColorPickerModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ContextMenuModule,
    DataViewModule,
    DialogModule,
    DividerModule,
    DrawerModule,
    DockModule,
    DragDropModule,
    DynamicDialogModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    FocusTrapModule,
    GalleriaModule,
    InplaceModule,
    InputMaskModule,
    TextareaModule,
    InputNumberModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputOtpModule,
    ImageModule,
    ImageCompareModule,
    KnobModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MessageModule,
    MeterGroupModule,
    OrganizationChartModule,
    OrderListModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    PopoverModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    RatingModule,
    SelectButtonModule,
    ScrollerModule,
    ScrollPanelModule,
    ScrollTopModule,
    SkeletonModule,
    SpeedDialModule,
    SplitterModule,
    StepperModule,
    SplitButtonModule,
    StepsModule,
    TerminalModule,
    TieredMenuModule,
    TimelineModule,
    ToastModule,
    ToggleButtonModule,
    ToggleSwitchModule,
    TooltipModule,
    Tooltip,
    TreeModule,
    TreeSelectModule,
    TreeTableModule,
    CardModule,
    RippleModule,
    StyleClassModule,
    FloatLabelModule,
    AutoFocusModule,
    KeyFilterModule,
    CdkDragPlaceholder,
    Fluid
],
  providers: [
    ConfirmationService,
    MessageService,
    NodeService
  ]
})
export class HomeModule { }
