import React, { useEffect, useState, useRef } from 'react'
import data from "../data.json"
import AchievementSection from "./AchievementSection";
import { IoCodeSlash, IoBook } from "react-icons/io5";
import { MdScience } from "react-icons/md";
import { TbMath } from "react-icons/tb";
import FilterButton from './FilterButton';
import UpButton from './UpButton';
import useIsVisible from '../hooks/useIsVisible';

function Achievements({elRef}) {

  const [category, setCategory] = useState("")

  const achievementWrapper = useRef({})

  const filters = [
		{
			icon: <IoCodeSlash />,
			label: "coding",
		},
		{
			icon: <IoBook />,
			label: "academic",
		},
		{
			icon: <MdScience />,
			label: "science",
		},
    {
      icon: <TbMath/>,
      label: "math"
    }
	];

  return (
		<div id="achievements" ref={elRef}>
			<h1>achievements</h1>
			<div className="filter-wrapper">
				<p className="filter-label">filter: </p>
				<div className="filter-scroll">
					{filters.map((filter, key) => (
						<FilterButton
							category={category}
							setCategory={setCategory}
							key={key}
							icon={filter.icon}
							label={filter.label}
						/>
					))}
				</div>
			</div>
			<div
				className="section-wrapper"
				ref={achievementWrapper}
			>
				{/* sorts so that latest is shown first */}
				{Object.keys(data.achievements)
					.sort(function (a, b) {
						return Number(b) - Number(a);
					})
					.map((year, key) => (
						<AchievementSection key={key} header={year} category={category} />
					))}
			</div>
			<UpButton heading={"#achievements"} wrapperRef={achievementWrapper} />
		</div>
	);
}

export default Achievements