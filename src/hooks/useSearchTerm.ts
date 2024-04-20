import { useState } from 'react';

export default function useSearchTerm() {
	const [searchTerm, setSearchTerm] = useState<string>('');

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return { handleSearchChange, searchTerm };
}
