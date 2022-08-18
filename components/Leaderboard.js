import React, {useEffect, useState} from 'react'
import styles from '../styles/homepage.module.css'
import { leaderboard } from '../data/leaderboard'

const sortedLeaderboard = sortLeaderboard(leaderboard)

const Leaderboard = () => {
  return (
    <>
    <h1 className={"main-header"} style={{fontSize: '60px', marginLeft: '-1rem', marginTop: '3rem'}}>Team Leaderboard</h1>
    {leaderboard.map((item, index) => {
        return <LeaderboardItem key={index} pos={index + 1} team={item.team} points={item.points}/>
    })}
    </>
  )
}

const LeaderboardItem = ({ pos, team, points }) => {
    return(
        <div className={"container " + styles.leaderboardItemContainer}>
            <div className={"row d-flex align-items-center"} style={{paddingInline: '8%', height: '4rem'}}>
                <div className={"col d-flex"}>
                    <div className={styles.positionDiv}>{pos}</div>
                </div>
                <div className={"col"}>
                <span className={styles.teamText}>{team}</span>
                </div>
                <div className={"col d-flex flex-row-reverse"}>
                    <span className={styles.pointsText}>{points} pts</span>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard

function sortLeaderboard (arr) {
    return arr.sort((a, b) => {
        return b.points - a.points
    })
}