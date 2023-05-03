import { Plugin } from 'vue';
import { AccordionPassThroughOptions } from '../accordion';
import { AccordionTabPassThroughOptions } from '../accordiontab';
import { AvatarPassThroughOptions } from '../avatar';
import { BadgePassThroughOptions } from '../badge';
import { BlockUIPassThroughOptions } from '../blockui';
import { BreadcrumbPassThroughOptions } from '../breadcrumb';
import { ButtonPassThroughOptions } from '../button';
import { CardPassThroughOptions } from '../card';
import { ChartPassThroughOptions } from '../chart';
import { ChipPassThroughOptions } from '../chip';
import { ConfirmDialogPassThroughOptions } from '../confirmdialog';
import { ConfirmPopupPassThroughOptions } from '../confirmpopup';
import { ContextMenuPassThroughOptions } from '../contextmenu';
import { DeferredContentPassThroughOptions } from '../deferredcontent';
import { DialogPassThroughOptions } from '../dialog';
import { DividerPassThroughOptions } from '../divider';
import { DockPassThroughOptions } from '../dock';
import { FieldsetPassThroughOptions } from '../fieldset';
import { FileUploadPassThroughOptions } from '../fileupload';
import { InlineMessagePassThroughOptions } from '../inlinemessage';
import { InplacePassThroughOptions } from '../inplace';
import { MegaMenuPassThroughOptions } from '../megamenu';
import { MenuPassThroughOptions } from '../menu';
import { MenubarPassThroughOptions } from '../menubar';
import { MessagePassThroughOptions } from '../message';
import { OverlayPanelPassThroughOptions } from '../overlaypanel';
import { PanelPassThroughOptions } from '../panel';
import { PanelMenuPassThroughOptions } from '../panelmenu';
import { ProgressBarPassThroughOptions } from '../progressbar';
import { ProgressSpinnerPassThroughOptions } from '../progressspinner';
import { ScrollPanelPassThroughOptions } from '../scrollpanel';
import { ScrollTopPassThroughOptions } from '../scrolltop';
import { SidebarPassThroughOptions } from '../sidebar';
import { SkeletonPassThroughOptions } from '../skeleton';
import { SpeedDialPassThroughOptions } from '../speeddial';
import { SplitButtonPassThroughOptions } from '../splitbutton';
import { SplitterPassThroughOptions } from '../splitter';
import { TabMenuPassThroughOptions } from '../tabmenu';
import { TabPanelPassThroughOptions } from '../tabpanel';
import { TabViewPassThroughOptions } from '../tabview';
import { TagPassThroughOptions } from '../tag';
import { TerminalPassThroughOptions } from '../terminal';
import { TieredMenuPassThroughOptions } from '../tieredmenu';
import { ToastPassThroughOptions } from '../toast';
import { ToolbarPassThroughOptions } from '../toolbar';

interface PrimeVueConfiguration {
    ripple?: boolean;
    inputStyle?: string;
    locale?: PrimeVueLocaleOptions;
    filterMatchModeOptions?: any;
    zIndex?: PrimeVueZIndexOptions;
    pt?: PrimeVuePTOptions;
}

interface PrimeVueZIndexOptions {
    modal?: number;
    overlay?: number;
    menu?: number;
    tooltip?: number;
}

interface PrimeVuePTOptions {
    accordion?: AccordionPassThroughOptions;
    accordiontab?: AccordionTabPassThroughOptions;
    avatar?: AvatarPassThroughOptions;
    badge?: BadgePassThroughOptions;
    blockui?: BlockUIPassThroughOptions;
    breadcrumb?: BreadcrumbPassThroughOptions;
    button?: ButtonPassThroughOptions;
    card?: CardPassThroughOptions;
    chart?: ChartPassThroughOptions;
    chip?: ChipPassThroughOptions;
    confirmdialog?: ConfirmDialogPassThroughOptions;
    confirmpopup?: ConfirmPopupPassThroughOptions;
    contextmenu?: ContextMenuPassThroughOptions;
    deferredcontent?: DeferredContentPassThroughOptions;
    divider?: DividerPassThroughOptions;
    dialog?: DialogPassThroughOptions;
    dock?: DockPassThroughOptions;
    dynamicdialog?: DialogPassThroughOptions;
    fieldset?: FieldsetPassThroughOptions;
    fileupload?: FileUploadPassThroughOptions;
    inlinemessage?: InlineMessagePassThroughOptions;
    inplace?: InplacePassThroughOptions;
    megamenu?: MegaMenuPassThroughOptions;
    menu?: MenuPassThroughOptions;
    menubar?: MenubarPassThroughOptions;
    message?: MessagePassThroughOptions;
    overlaypanel?: OverlayPanelPassThroughOptions;
    panel?: PanelPassThroughOptions;
    panelmenu?: PanelMenuPassThroughOptions;
    progressbar?: ProgressBarPassThroughOptions;
    progressspinner?: ProgressSpinnerPassThroughOptions;
    scrollpanel?: ScrollPanelPassThroughOptions;
    scrolltop?: ScrollTopPassThroughOptions;
    sidebar?: SidebarPassThroughOptions;
    skeleton?: SkeletonPassThroughOptions;
    speeddial?: SpeedDialPassThroughOptions;
    splitbutton?: SplitButtonPassThroughOptions;
    splitter?: SplitterPassThroughOptions;
    steps?: PanelMenuPassThroughOptions;
    tabmenu?: TabMenuPassThroughOptions;
    tabpanel?: TabPanelPassThroughOptions;
    tabview?: TabViewPassThroughOptions;
    tag?: TagPassThroughOptions;
    terminal?: TerminalPassThroughOptions;
    tieredmenu?: TieredMenuPassThroughOptions;
    toast?: ToastPassThroughOptions;
    toolbar?: ToolbarPassThroughOptions;
}

interface PrimeVueLocaleAriaOptions {
    trueLabel?: string;
    falseLabel?: string;
    nullLabel?: string;
    star?: string;
    stars?: string;
    selectAll?: string;
    unselectAll?: string;
    close?: string;
    previous?: string;
    next?: string;
    navigation?: string;
    scrollTop?: string;
    moveUp?: string;
    moveTop?: string;
    moveDown?: string;
    moveBottom?: string;
    moveToTarget?: string;
    moveToSource?: string;
    moveAllToTarget?: string;
    moveAllToSource?: string;
    pageLabel?: string;
    firstPageLabel?: string;
    lastPageLabel?: string;
    nextPageLabel?: string;
    prevPageLabel?: string;
    rowsPerPageLabel?: string;
    jumpToPageDropdownLabel?: string;
    jumpToPageInputLabel?: string;
    selectRow?: string;
    unselectRow?: string;
    expandRow?: string;
    collapseRow?: string;
    showFilterMenu?: string;
    hideFilterMenu?: string;
    filterOperator?: string;
    filterConstraint?: string;
    editRow?: string;
    saveEdit?: string;
    cancelEdit?: string;
    listView?: string;
    gridView?: string;
    slide?: string;
    slideNumber?: string;
    zoomImage?: string;
    zoomIn?: string;
    zoomOut?: string;
    rotateRight?: string;
    rotateLeft?: string;
}

interface PrimeVueLocaleOptions {
    startsWith?: string;
    contains?: string;
    notContains?: string;
    endsWith?: string;
    equals?: string;
    notEquals?: string;
    noFilter?: string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    dateIs?: string;
    dateIsNot?: string;
    dateBefore?: string;
    dateAfter?: string;
    clear?: string;
    apply?: string;
    matchAll?: string;
    matchAny?: string;
    addRule?: string;
    removeRule?: string;
    accept?: string;
    reject?: string;
    choose?: string;
    upload?: string;
    cancel?: string;
    completed?: string;
    pending?: string;
    dayNames: string[];
    dayNamesShort: string[];
    dayNamesMin: string[];
    monthNames: string[];
    monthNamesShort: string[];
    chooseYear?: string;
    chooseMonth?: string;
    chooseDate?: string;
    prevDecade?: string;
    nextDecade?: string;
    prevYear?: string;
    nextYear?: string;
    prevMonth?: string;
    nextMonth?: string;
    prevHour?: string;
    nextHour?: string;
    prevMinute?: string;
    nextMinute?: string;
    prevSecond?: string;
    nextSecond?: string;
    am?: string;
    pm?: string;
    today?: string;
    weekHeader?: string;
    firstDayOfWeek?: number;
    dateFormat?: string;
    weak?: string;
    medium?: string;
    strong?: string;
    passwordPrompt?: string;
    emptyFilterMessage?: string;
    searchMessage?: string;
    selectionMessage?: string;
    emptySelectionMessage?: string;
    emptySearchMessage?: string;
    emptyMessage?: string;
    aria?: PrimeVueLocaleAriaOptions;
}

export declare function usePrimeVue(): { config: PrimeVueConfiguration };

declare const plugin: Plugin;
export default plugin;

declare module 'vue/types/vue' {
    interface Vue {
        $primevue: {
            config: PrimeVueConfiguration;
        };
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $primevue: {
            config: PrimeVueConfiguration;
        };
    }
}
