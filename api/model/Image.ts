import { c } from '@contember/schema-definition'
import { Branch } from './Branch'
import { Company } from './Company'
import { Person } from './Person'

export class ProfilePicture {
	createdAt = c.dateTimeColumn().notNull().default('now')
	image = c.manyHasOne(Image, 'profilePicture')
	person = c.oneHasMany(Person, 'profilePicture')
}

export class Image {
	createdAt = c.dateTimeColumn().notNull().default('now')
	url = c.stringColumn().notNull()
	width = c.intColumn()
	height = c.intColumn()
	alt = c.stringColumn()
	meta = c.oneHasOne(ImageMetadata, 'image')
	companyLogo = c.oneHasMany(Company, 'logo')
	branchLogo = c.oneHasMany(Branch, 'logo')
	profilePicture = c.oneHasMany(ProfilePicture, 'image')
}

export class ImageMetadata {
	createdAt = c.dateTimeColumn().notNull().default('now')
	image = c.oneHasOneInverse(Image, 'meta')
	fileName = c.stringColumn()
	lastModified = c.dateTimeColumn()
	fileSize = c.intColumn()
	fileType = c.stringColumn()
}

export class File {
	createdAt = c.dateTimeColumn().notNull().default('now')
	url = c.stringColumn().notNull()
}
