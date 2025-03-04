import { LINKED_INSTANCE_URL } from "$lib/instance.js";
import { redirect } from "@sveltejs/kit";

export const load = () => {
  if (LINKED_INSTANCE_URL) {
    redirect(302, `/signup/${LINKED_INSTANCE_URL}`);
  }
}