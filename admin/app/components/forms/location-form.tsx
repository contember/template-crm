import { BranchForm } from "~/app/components/forms/branch-form"
import { BranchPreview } from "~/app/components/previews/branch-preview"
import { FormLayout, InputField, SelectField } from "~/lib/form"

import { Component } from "@contember/interface"

export interface LocationFormProps {
  over?: "location" | (string & {})
}

export const LocationForm = Component(({ over }: LocationFormProps) => (
  <FormLayout>
    {over !== "location" && (
      <SelectField
        field="branch"
        label="Branch"
        createNewForm={<BranchForm over="branch" />}
      >
        <BranchPreview />
      </SelectField>
    )}
    <InputField field="country" label="Country" required />
    <InputField field="region" label="Region" required />
    <InputField field="district" label="District" required />
    <InputField field="city" label="City" required />
  </FormLayout>
))
