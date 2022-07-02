import { TextField } from "@mui/material";

const InputText = ({ fields, form, setForm }) => {
  const handleValue = ({ target }) => {
    setForm({
      ...form,
      [target.id]: target.value,
    });
  };

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      value={form[fields.id]}
      onChange={handleValue}
      autoComplete={fields.autoComplete}
      name={fields.name}
      id={fields.id}
      label={fields.label}
      autoFocus={fields.autoFocus}
    />
  );
};

export { InputText };
