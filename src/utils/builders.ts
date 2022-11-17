interface DataPrefixBuilder {
	names: string[];
	explan: { es: string; en: string; pt: string };
	usage: { es: string; en: string; pt: string };
	note?: { es: string; en: string; pt: string };
	cooldown: number;
	args: number;
	isPublic: boolean;
}

export class PrefixBuilder {
	names: string[];
	explan: { es: string; en: string; pt: string };
	usage: { es: string; en: string; pt: string };
	note?: { es: string; en: string; pt: string };
	cooldown?: number;
	args: number;
	isPublic: boolean;
	category: string;
	constructor(data?: DataPrefixBuilder) {
		this.names = data?.names || [];
		this.explan = data?.explan || { es: '', en: '', pt: '' };
		this.usage = data?.usage || { es: '', en: '', pt: '' };
		this.note = data?.note;
		this.cooldown = data?.cooldown || 2000;
		this.args = data?.args || 0;
		this.isPublic = data?.isPublic || false;
		this.category = '';

	}

	setNames(...names: string[]): PrefixBuilder {
		this.names = names;
		return this;
	}

	setCategory(category: string): PrefixBuilder {
		this.category = category;
		return this;
	}

	setExplan(es: string, en: string, pt: string): PrefixBuilder {
		this.explan = { es, en, pt };
		return this;
	}

	setUsage(es: string, en: string, pt: string): PrefixBuilder {
		this.usage = { es, en, pt };
		return this;
	}

	setNote(es: string, en: string, pt: string): PrefixBuilder {
		this.note = { es, en, pt };
		return this;
	}

	setCooldown(cooldown: number): PrefixBuilder {
		this.cooldown = cooldown * 1000;
		return this;
	}

	setArgs(args: number): PrefixBuilder {
		this.args = args;
		return this;
	}

	setPublic(is: boolean): PrefixBuilder {
		this.isPublic = is;
		return this;
	}
}
