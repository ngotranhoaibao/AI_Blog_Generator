import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import React from "react";
import deleteAnimation from "@/assets/trash.json";
export function DialogSubmitDelete({
  open,
  onOpenChange,
  handleDeleteHistory,
  id,
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="text-center bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] rounded-lg border p-6 shadow-lg duration-200 sm:max-w-[425px] gap-0">
        <div className="flex justify-center items-center w-full">
          <div style={{ width: 200, height: 200 }}>
            <Lottie animationData={deleteAnimation} loop={true} />
          </div>
        </div>

        <div
          data-slot="dialog-header"
          className="flex flex-col gap-2 text-center sm:text-left"
        >
          <h2
            id="radix-_r_a_"
            data-slot="dialog-title"
            className="text-lg leading-none font-semibold text-center"
          >
            Confirm Delete
          </h2>
          <p
            id="radix-_r_b_"
            data-slot="dialog-description"
            className="text-muted-foreground text-sm text-center"
          >
            Are you sure you want to delete this item? This action cannot be
            undone.
          </p>
        </div>
        <div
          data-slot="dialog-footer"
          className="flex-col-reverse sm:flex-row sm:justify-end mt-8 grid grid-cols-2 gap-2"
        >
          <button
            data-slot="dialog-close"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3"
            type="button"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              handleDeleteHistory(id);
              onOpenChange(false);
            }}
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 h-9 px-4 py-2 has-[&gt;svg]:px-3"
            type="submit"
          >
            Delete
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default DialogSubmitDelete;
