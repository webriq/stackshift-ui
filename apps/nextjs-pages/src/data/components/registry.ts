import { registerComponentDoc } from "./index";
import { accordionDoc } from "./accordion";
import { avatarDoc } from "./avatar";
import { badgeDoc } from "./badge";
import { buttonDoc } from "./button";
import { calendarDoc } from "./calendar";
import { cardDoc } from "./card";
import { checkboxDoc } from "./checkbox";
import { checkboxGroupDoc } from "./checkbox-group";
import { containerDoc } from "./container";
import { dataTableDoc } from "./data-table";
import { datePickerDoc } from "./date-picker";
import { dialogDoc } from "./dialog";
import { dropdownMenuDoc } from "./dropdown-menu";
import { flexDoc } from "./flex";
import { formDoc } from "./form";
import { formFieldDoc } from "./form-field";
import { gridDoc, gridItemDoc } from "./grid";
import { headingDoc } from "./heading";
import { imageDoc } from "./image";
import { inputDoc } from "./input";
import { inputFileDoc } from "./input-file";
import { labelDoc } from "./label";
import { linkDoc } from "./link";
import { menuDoc } from "./menu";
import { paginationDoc } from "./pagination";
import { popoverDoc } from "./popover";
import { radioDoc } from "./radio";
import { radioGroupDoc } from "./radio-group";
import { scrollAreaDoc } from "./scroll-area";
import { sectionDoc } from "./section";
import { selectDoc } from "./select";
import { sheetDoc } from "./sheet";
import { skeletonDoc } from "./skeleton";
import { socialIconsDoc } from "./social-icons";
import { statsCardDoc } from "./stats-card";
import { switchDoc } from "./switch";
import { tableDoc } from "./table";
import { textDoc } from "./text";
import { textareaDoc } from "./textarea";
import { toastDoc } from "./toast";
import { toggleDoc } from "./toggle";
import { toggleGroupDoc } from "./toggle-group";
import { tooltipDoc } from "./tooltip";

// Register all component docs
export function initializeComponentDocs() {
  // Layout components
  registerComponentDoc(containerDoc);
  registerComponentDoc(flexDoc);
  registerComponentDoc(gridDoc);
  registerComponentDoc(gridItemDoc);
  registerComponentDoc(sectionDoc);

  // UI components
  registerComponentDoc(accordionDoc);
  registerComponentDoc(avatarDoc);
  registerComponentDoc(badgeDoc);
  registerComponentDoc(buttonDoc);
  registerComponentDoc(calendarDoc);
  registerComponentDoc(cardDoc);
  registerComponentDoc(checkboxDoc);
  registerComponentDoc(checkboxGroupDoc);
  registerComponentDoc(dataTableDoc);
  registerComponentDoc(datePickerDoc);
  registerComponentDoc(dialogDoc);
  registerComponentDoc(dropdownMenuDoc);
  registerComponentDoc(formDoc);
  registerComponentDoc(formFieldDoc);
  registerComponentDoc(headingDoc);
  registerComponentDoc(imageDoc);
  registerComponentDoc(inputDoc);
  registerComponentDoc(inputFileDoc);
  registerComponentDoc(labelDoc);
  registerComponentDoc(linkDoc);
  registerComponentDoc(menuDoc);
  registerComponentDoc(paginationDoc);
  registerComponentDoc(popoverDoc);
  registerComponentDoc(radioDoc);
  registerComponentDoc(radioGroupDoc);
  registerComponentDoc(scrollAreaDoc);
  registerComponentDoc(selectDoc);
  registerComponentDoc(sheetDoc);
  registerComponentDoc(skeletonDoc);
  registerComponentDoc(socialIconsDoc);
  registerComponentDoc(statsCardDoc);
  registerComponentDoc(switchDoc);
  registerComponentDoc(tableDoc);
  registerComponentDoc(textDoc);
  registerComponentDoc(textareaDoc);
  registerComponentDoc(toastDoc);
  registerComponentDoc(toggleDoc);
  registerComponentDoc(toggleGroupDoc);
  registerComponentDoc(tooltipDoc);
}

// Initialize on import
initializeComponentDocs();
