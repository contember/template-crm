import { SchemaNames } from '@contember/client-content'
export const ContemberClientNames: SchemaNames = {
  "entities": {
    "Branch": {
      "name": "Branch",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "name": {
          "type": "column"
        },
        "company": {
          "type": "one",
          "entity": "Company"
        },
        "country": {
          "type": "one",
          "entity": "Country"
        },
        "region": {
          "type": "column"
        },
        "city": {
          "type": "column"
        },
        "contacts": {
          "type": "many",
          "entity": "Contact"
        },
        "logo": {
          "type": "one",
          "entity": "Image"
        },
        "employees": {
          "type": "many",
          "entity": "Person"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "name",
        "region",
        "city"
      ]
    },
    "Company": {
      "name": "Company",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "name": {
          "type": "column"
        },
        "industry": {
          "type": "column"
        },
        "country": {
          "type": "one",
          "entity": "Country"
        },
        "address": {
          "type": "column"
        },
        "vatNumber": {
          "type": "column"
        },
        "identificationNumber": {
          "type": "column"
        },
        "website": {
          "type": "column"
        },
        "branches": {
          "type": "many",
          "entity": "Branch"
        },
        "contacts": {
          "type": "many",
          "entity": "Contact"
        },
        "leads": {
          "type": "many",
          "entity": "Lead"
        },
        "logo": {
          "type": "one",
          "entity": "Image"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "name",
        "industry",
        "address",
        "vatNumber",
        "identificationNumber",
        "website"
      ]
    },
    "Contact": {
      "name": "Contact",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "firstName": {
          "type": "column"
        },
        "lastName": {
          "type": "column"
        },
        "email": {
          "type": "column"
        },
        "phone": {
          "type": "column"
        },
        "contactType": {
          "type": "column"
        },
        "position": {
          "type": "column"
        },
        "address": {
          "type": "column"
        },
        "note": {
          "type": "column"
        },
        "company": {
          "type": "one",
          "entity": "Company"
        },
        "branch": {
          "type": "one",
          "entity": "Branch"
        },
        "leads": {
          "type": "many",
          "entity": "Lead"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "firstName",
        "lastName",
        "email",
        "phone",
        "contactType",
        "position",
        "address",
        "note"
      ]
    },
    "Country": {
      "name": "Country",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "name": {
          "type": "column"
        },
        "branches": {
          "type": "many",
          "entity": "Branch"
        },
        "companies": {
          "type": "many",
          "entity": "Company"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "name"
      ]
    },
    "File": {
      "name": "File",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "url": {
          "type": "column"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "url"
      ]
    },
    "Image": {
      "name": "Image",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "url": {
          "type": "column"
        },
        "width": {
          "type": "column"
        },
        "height": {
          "type": "column"
        },
        "alt": {
          "type": "column"
        },
        "meta": {
          "type": "one",
          "entity": "ImageMetadata"
        },
        "companyLogo": {
          "type": "many",
          "entity": "Company"
        },
        "branchLogo": {
          "type": "many",
          "entity": "Branch"
        },
        "profilePicture": {
          "type": "many",
          "entity": "ProfilePicture"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "url",
        "width",
        "height",
        "alt"
      ]
    },
    "ImageMetadata": {
      "name": "ImageMetadata",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "image": {
          "type": "one",
          "entity": "Image"
        },
        "fileName": {
          "type": "column"
        },
        "lastModified": {
          "type": "column"
        },
        "fileSize": {
          "type": "column"
        },
        "fileType": {
          "type": "column"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "fileName",
        "lastModified",
        "fileSize",
        "fileType"
      ]
    },
    "Lead": {
      "name": "Lead",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "name": {
          "type": "column"
        },
        "company": {
          "type": "one",
          "entity": "Company"
        },
        "contacts": {
          "type": "many",
          "entity": "Contact"
        },
        "responsibleEmployee": {
          "type": "one",
          "entity": "Person"
        },
        "status": {
          "type": "column"
        },
        "amount": {
          "type": "column"
        },
        "currency": {
          "type": "column"
        },
        "closeDate": {
          "type": "column"
        },
        "lastContactDate": {
          "type": "column"
        },
        "nextActionDate": {
          "type": "column"
        },
        "nextActionNotes": {
          "type": "column"
        },
        "serviceType": {
          "type": "column"
        },
        "projectScopeSummary": {
          "type": "column"
        },
        "budgetEstimate": {
          "type": "column"
        },
        "projectUrgency": {
          "type": "column"
        },
        "decisionMakerIdentified": {
          "type": "column"
        },
        "salesQualificationScore": {
          "type": "column"
        },
        "proposalSent": {
          "type": "column"
        },
        "proposalLink": {
          "type": "column"
        },
        "contractSent": {
          "type": "column"
        },
        "contractSignedDate": {
          "type": "column"
        },
        "source": {
          "type": "column"
        },
        "referrer": {
          "type": "column"
        },
        "marketingCampaign": {
          "type": "column"
        },
        "industry": {
          "type": "column"
        },
        "priority": {
          "type": "column"
        },
        "isStrategic": {
          "type": "column"
        },
        "offers": {
          "type": "many",
          "entity": "Offer"
        },
        "notes": {
          "type": "many",
          "entity": "Note"
        },
        "displayOrder": {
          "type": "column"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "name",
        "status",
        "amount",
        "currency",
        "closeDate",
        "lastContactDate",
        "nextActionDate",
        "nextActionNotes",
        "serviceType",
        "projectScopeSummary",
        "budgetEstimate",
        "projectUrgency",
        "decisionMakerIdentified",
        "salesQualificationScore",
        "proposalSent",
        "proposalLink",
        "contractSent",
        "contractSignedDate",
        "source",
        "referrer",
        "marketingCampaign",
        "industry",
        "priority",
        "isStrategic",
        "displayOrder"
      ]
    },
    "Location": {
      "name": "Location",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "country": {
          "type": "column"
        },
        "region": {
          "type": "column"
        },
        "district": {
          "type": "column"
        },
        "city": {
          "type": "column"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "country",
        "region",
        "district",
        "city"
      ]
    },
    "Note": {
      "name": "Note",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "content": {
          "type": "column"
        },
        "author": {
          "type": "one",
          "entity": "Person"
        },
        "lead": {
          "type": "one",
          "entity": "Lead"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "content"
      ]
    },
    "Offer": {
      "name": "Offer",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "description": {
          "type": "column"
        },
        "price": {
          "type": "column"
        },
        "validUntil": {
          "type": "column"
        },
        "lead": {
          "type": "one",
          "entity": "Lead"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "description",
        "price",
        "validUntil"
      ]
    },
    "Person": {
      "name": "Person",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "updatedAt": {
          "type": "column"
        },
        "firstName": {
          "type": "column"
        },
        "lastName": {
          "type": "column"
        },
        "email": {
          "type": "column"
        },
        "phone": {
          "type": "column"
        },
        "subordinates": {
          "type": "many",
          "entity": "Person"
        },
        "supervisor": {
          "type": "one",
          "entity": "Person"
        },
        "leads": {
          "type": "many",
          "entity": "Lead"
        },
        "branch": {
          "type": "one",
          "entity": "Branch"
        },
        "profilePicture": {
          "type": "one",
          "entity": "ProfilePicture"
        },
        "notes": {
          "type": "many",
          "entity": "Note"
        },
        "role": {
          "type": "column"
        },
        "personId": {
          "type": "column"
        },
        "tenantPerson": {
          "type": "one",
          "entity": "TenantPerson"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "updatedAt",
        "firstName",
        "lastName",
        "email",
        "phone",
        "role",
        "personId"
      ]
    },
    "ProfilePicture": {
      "name": "ProfilePicture",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "image": {
          "type": "one",
          "entity": "Image"
        },
        "person": {
          "type": "many",
          "entity": "Person"
        }
      },
      "scalars": [
        "id",
        "createdAt"
      ]
    },
    "TenantPerson": {
      "name": "TenantPerson",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "identityId": {
          "type": "column"
        },
        "email": {
          "type": "column"
        },
        "otpUri": {
          "type": "column"
        },
        "otpActivatedAt": {
          "type": "column"
        },
        "idpOnly": {
          "type": "column"
        },
        "roles": {
          "type": "column"
        },
        "person": {
          "type": "one",
          "entity": "Person"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "identityId",
        "email",
        "otpUri",
        "otpActivatedAt",
        "idpOnly",
        "roles"
      ]
    }
  },
  "enums": {
    "contactType": [
      "potentialClient",
      "client",
      "vipClient"
    ],
    "currency": [
      "usd",
      "eur",
      "gbp"
    ],
    "dealStatus": [
      "interest",
      "overview",
      "viewings",
      "offers",
      "hots",
      "contact",
      "signed",
      "invoicing"
    ],
    "employeeDivision": [
      "industrial",
      "officeRetail",
      "services",
      "propertyManagement",
      "projectManagement",
      "research",
      "operations"
    ],
    "leadStatus": [
      "lead",
      "contacted",
      "qualified",
      "proposal",
      "negotiation",
      "contractSent",
      "won",
      "lost",
      "onHold"
    ],
    "personRole": [
      "agent",
      "manager",
      "employee",
      "head",
      "board",
      "finance",
      "research",
      "admin"
    ],
    "priority": [
      "low",
      "medium",
      "high"
    ],
    "projectUrgency": [
      "low",
      "medium",
      "high",
      "critical"
    ],
    "salesQualificationScore": [
      "low",
      "medium",
      "high"
    ],
    "serviceType": [
      "mvpBuild",
      "uxAudit",
      "staffAugmentation",
      "consulting",
      "maintenance",
      "other"
    ],
    "sourceType": [
      "advertisement",
      "personal",
      "catalog",
      "other"
    ]
  }
}