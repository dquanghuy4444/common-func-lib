
function formatToThousand(num:number):string {
	const str = (+num).toString().split('.');
	const int = (nums: string) => nums.split('').reverse().reduceRight((t, v, i) => t + (i % 3 ? v : `${v},`), '').replace(/^,|,$/g, '');
	const dec = (nums: string) => nums.split('').reduce((t, v, i) => t + ((i + 1) % 3 ? v : `${v},`), '').replace(/^,|,$/g, '');
	return str.length > 1 ? `${int(str[0])}.${dec(str[1])}` : int(str[0]);
}

export { formatToThousand };