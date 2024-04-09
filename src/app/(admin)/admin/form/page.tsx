import { H1 } from "@/app/_components/global/Text";
import Table from "./_components/Table";
import { findFormsWithUser } from "@/utils/database/form.query";
import { nextGetServerSession } from "@/lib/next-auth";

export default async function Forms() {
  const session = await nextGetServerSession();
  const { user } = session!;

  const forms = await findFormsWithUser({
    user_id: user?.role == "SuperAdmin" ? undefined : user?.id,
  });

  return (
    <>
      <H1>Formulir</H1>
      <Table data={forms} />
    </>
  );
}
