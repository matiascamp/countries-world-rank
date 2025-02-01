import React, { Dispatch, SetStateAction, useState } from 'react';
import "./filterRegions.css"
import { filtersType } from '../../interfaces/filters';

type FilterRegionsProps = {
    filters: { sortBy: string; isUnMember: boolean; isIndependant: boolean }
    setFilters: Dispatch<SetStateAction<filtersType>>
}

const FilterRegions = ({ filters, setFilters }: FilterRegionsProps) => {


    const [pressedButton, setPressedButton] = useState<string | null>(null);


    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters((prev) => ({ ...prev, sortBy: event?.target.value }))
    }

    const handleIsMember = () => {
        setFilters((prev) => ({ ...prev, isUnMember: !filters.isUnMember }))
    }

    const handleIsIndependant = () => {
        setFilters((prev) => ({ ...prev, isIndependant: !filters.isIndependant }))
    }

    const handleRegions = (e: React.MouseEvent<HTMLButtonElement>) => {

        const regions = e.currentTarget.value;
        setPressedButton(prev => (prev === regions ? null : regions));
        setFilters((prev) => {
            const isAlreadySelected = prev.region.includes(regions)
            const updatedRegions = isAlreadySelected ? prev.region.filter(e => e !== regions) : [...prev.region, regions]

            return {
                ...prev,
                region: updatedRegions
            }
        })
    }


    return (
        <aside>
            <div className='sort-container'>
                <label htmlFor="sort">Sort by</label>
                <select name="sort" id="sort" onChange={handleSortChange} defaultValue={'population'}>
                    <option value="population">Population</option>
                    <option value="area">Area</option>
                    <option value="alphabetical">Alphabetical</option>
                </select>
            </div>
            <div className='regions-container'>
            <div>Regions</div>
            <div className="regions-buttons-container">
                <button className={pressedButton === 'Americas' ? "region-button-pressed" : "region-button"} onClick={handleRegions} value={'Americas'}>Americas</button>
                <button className={pressedButton === 'Antarctic' ? "region-button-pressed" : "region-button"} onClick={handleRegions} value={'Antarctic'}>Antarctic</button>
                <button className={pressedButton === 'Africa' ? "region-button-pressed" : "region-button"} onClick={handleRegions} value={'Africa'}>Africa</button>
                <button className={pressedButton === 'Asia' ? "region-button-pressed" : "region-button"} onClick={handleRegions} value={'Asia'}>Asia</button>
                <button className={pressedButton === 'Europe' ? "region-button-pressed" : "region-button"} onClick={handleRegions} value={'Europe'}>Europe</button>
                <button className={pressedButton === 'Oceania' ? "region-button-pressed" : "region-button"} onClick={handleRegions} value={'Oceania'}>Oceania</button>
            </div>
            </div>
            <div className='status-container'>
            <div>Status</div>
            <div className='check-container'>
                <input type="checkbox"  id='member' onChange={handleIsMember} />
                <label htmlFor="member">Member of the United Nations</label>
            </div>
            <div className='check-container'>
                <input type="checkbox"  id='not-member' onChange={handleIsIndependant} />
                <label htmlFor="not-member">Independent</label>
            </div>
            </div>
        </aside>
    );
};

export default FilterRegions;