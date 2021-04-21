import React from "react";
import map from "lodash/map";
import {
  DatePicker,
  Form,
  Input,
  TimePicker,
  Select,
  Rate,
  Switch,
  Checkbox,
} from "antd";

const { RangePicker } = DatePicker;
const FormItem = Form.Item;
const { Option } = Select;

const CreateAntField = (Component) => ({
  field,
  form,
  hasFeedback,
  label,
  selectOptions,
  submitCount,
  type,
  renderRight,
  handleChange,
  autoSize,
  ...props
}) => {
  const touched = form.touched[field.name];
  const submitted = submitCount > 0;
  const hasError = form.errors[field.name];
  const submittedError = hasError && submitted;
  const touchedError = hasError && touched;
  const onInputChange = ({ target: { value } }) => {
    form.setFieldValue(field.name, value);
    if (handleChange) {
      // const re = /^[0-9\b]+$/;
      if (
        type == "phone" &&
        (value.split("").shift() == "0" ||
          (value != "" && !Number(value)) ||
          value.split("").includes(" "))
      ) {
      } else {
        handleChange(value, field.name);
      }
    }
  };
  const onChange = (value) => form.setFieldValue(field.name, value);
  const onBlur = () => form.setFieldTouched(field.name, true);
  return (
    <div className="field-container">
      <FormItem
        label={label}
        colon={false}
        hasFeedback={
          (hasFeedback && submitted) || (hasFeedback && touched) ? true : false
        }
        help={submittedError || touchedError ? hasError : false}
        validateStatus={submittedError || touchedError ? "error" : "success"}
      >
        {type === "checkbox" ? (
          <Checkbox.Group {...props} />
        ) : type !== "TextArea" ? (
          <Component
            {...field}
            {...props}
            type={type}
            onBlur={onBlur}
            onChange={type ? onInputChange : onChange}
          >
            {selectOptions &&
              map(selectOptions, (name) => <Option key={name}>{name}</Option>)}
          </Component>
        ) : (
          <Input.TextArea
            {...props}
            autoSize={autoSize}
            onBlur={onBlur}
            onChange={onInputChange}
          />
        )}
      </FormItem>
    </div>
  );
};

export const AntSelect = CreateAntField(Select);
export const AntDatePicker = CreateAntField(DatePicker);
export const AntInput = CreateAntField(Input);
export const AntTextArea = CreateAntField(Input.TextArea);
export const AntTimePicker = CreateAntField(TimePicker);
export const AntRate = CreateAntField(Rate);
export const AntSwitch = CreateAntField(Switch);
export const AntRange = CreateAntField(RangePicker);
export const AntCheckbox = CreateAntField(Checkbox);