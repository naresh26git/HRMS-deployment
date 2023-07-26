import { Qualification } from "server/src/trpc/routes/qualification/get-many";
import Card from "ui/Card";
import DataGrid from "ui/DataGrid";
import Stack from "ui/Stack";
import { useAsyncList } from "ui/hooks/UseAsyncList";
import PageHeader from "../../components/PageHeader";
import QualificationDialog from "../../components/QualificationDialog";
import ShowIf from "../../components/ShowIf";
import { useAuthContext } from "../../hooks/UseAuth";
import { client } from "../../main";
import { handleTRPCError } from "../../utils/handle-trpc-error";

const Qualifications = () => {
  const auth = useAuthContext();
  const value = useAsyncList<Qualification>({
    load: async (states) => {
      try {
        const qualification = await client.qualifications.getMany.mutate();
        console.log(qualification);
        return {
          items: qualification.items as any,
          totalCount: qualification.totalCount,
        };
      } catch (error) {
        handleTRPCError(error, auth);

        return {
          error: Error("Something went wrong"),
        };
      }
    },
  });

  return (
    <Stack gap="3">
      <ShowIf.Employee>
        <PageHeader
          title={<PageHeader.Title></PageHeader.Title>}
          actions={<QualificationDialog />}
        />
      </ShowIf.Employee>

      <Card>
        <DataGrid<Qualification>
          {...value}
          columns={[
            {
              id: "1",
              key: "",
              label: "Emp code",
              renderCell: (item) => <>{item.user.id}</>,
            },
            // {
            //   id: "2",
            //   key: "",
            //   label: "Emp Name",
            //   renderCell: (item) => <>{item.user.name}</>,
            // },
            {
              id: "2",
              key: "",
              label: "Emp Name",
              renderCell: (item) => (
                <>
                  {item.user.personalInfo
                    ? `${item.user.personalInfo.firstName} ${item.user.personalInfo.lastName}`
                    : ""}
                </>
              ),
            },
            {
              id: "3",
              key: "",
              label: "Qualification",
              renderCell: (item) => <>{item.name}</>,
            },
          ]}
        />
      </Card>
    </Stack>
  );
};

export default Qualifications;
