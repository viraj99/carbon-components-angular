import {
	Directive,
	ElementRef,
	ViewContainerRef,
	ContentChildren,
	QueryList,
	AfterViewInit,
	ViewChildren,
	Input,
	TemplateRef
} from "@angular/core";
import { DialogDirective } from "./../dialog.directive";
import { DialogService } from "./../dialog.service";
import { OverflowMenuOption } from "./overflow-menu-option.component";
import { OverflowMenuPane } from "./overflow-menu-pane.component";


/**
 * Directive for extending `Dialog` to create overflow menus.
 *
 * class: OverflowMenuDirective (extends DialogDirective)
 *
 *
 * selector: `ibmOverflowMenu`
 *
 *
 * ```html
 * <div [ibmOverflowMenu]="templateRef"></div>
 * <ng-template #templateRef>
 * 	<!-- overflow menu options here -->
 * </ng-template>
 * ```
 */
@Directive({
	selector: "[ibmOverflowMenu]",
	exportAs: "ibmOverflowMenu",
	providers: [
		DialogService
	]
})
export class OverflowMenuDirective extends DialogDirective {
	@Input() ibmOverflowMenu: TemplateRef<any>;

	/**
	 * Creates an instance of `OverflowMenuDirective`.
	 */
	constructor(
		protected elementRef: ElementRef,
		protected viewContainerRef: ViewContainerRef,
		protected dialogService: DialogService
	) {
		super(elementRef, viewContainerRef, dialogService);
		dialogService.create(OverflowMenuPane);
	}

	onDialogInit() {
		this.dialogConfig.content = this.ibmOverflowMenu;
	}
}
