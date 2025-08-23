"use client";
import { useState } from "react";
import { Form } from "@heroui/form";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Divider } from "@heroui/divider";
// import next from ;
import { GrLinkedin } from "react-icons/gr";
import { FaGoogle } from "react-icons/fa";
export default function home() {
  const [action, setAction] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Form
        className="w-full max-w-xs flex flex-col gap-4"
        onReset={() => setAction("reset")}
        onSubmit={(e) => {
          e.preventDefault();
          let data = Object.fromEntries(new FormData(e.currentTarget));

          setAction(`submit ${JSON.stringify(data)}`);
        }}
      >
        <Input
          isRequired
          errorMessage="Please enter a valid username"
          label="Username"
          name="username"
          type="text"
        />

        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          name="email"
          type="email"
        />
        <div className="flex flex-col gap-2 place-items-center justify-center w-full">
          <Button
            fullWidth={true}
            color="primary"
            type="submit"
            radius="full"
            children="Submit"
          />
          <Button
            fullWidth={true}
            type="reset"
            radius="full"
            children="reset"
          />
          <Divider className="my-4" />
          <Button
            fullWidth={true}
            type="reset"
            color="primary"
            radius="full"
            children="login with linkedin"
            startContent={<GrLinkedin />}
          />
          <Button
            fullWidth={true}
            color="danger"
            type="reset"
            radius="full"
            children="login with google"
            startContent={<FaGoogle />} 
          />
        </div>

      </Form>
    </div>
  );
}

