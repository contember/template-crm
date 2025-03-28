import { Component, Field } from "@contember/interface"

export const ContactPreview = Component(() => (
  <div>
    <Field field="firstName" />
    <Field field="lastName" />
    <Field field="email" />
  </div>
))
