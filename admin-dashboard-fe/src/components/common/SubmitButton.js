import { Button, Form } from "antd";
import { useEffect, useState } from "react";

const SubmitButton = ({ form, onSubmit }) => {
  const [submittable, setSubmittable] = useState(false);

  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
  }, [values]);

  return (
    <Button
      type="primary"
      htmlType="submit"
      disabled={!submittable}
      onClick={onSubmit}
    >
      Save
    </Button>
  );
};

export default SubmitButton;
