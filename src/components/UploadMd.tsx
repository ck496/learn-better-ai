import { Button, Field, Flex, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface FormValues {
  firstName: string;
  lastName: string;
}

const UploadMd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Flex align={"center"} justify={"center"}>
      <form onSubmit={onSubmit}>
        <Stack gap="4" align="flex-start" maxW="sm">
          <Field.Root invalid={!!errors.firstName}>
            <Field.Label>First name</Field.Label>
            <Input {...register("firstName")} />
            <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.lastName}>
            <Field.Label>Last name</Field.Label>
            <Input {...register("lastName")} />
            <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
          </Field.Root>
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Flex>
  );
};

export default UploadMd;
