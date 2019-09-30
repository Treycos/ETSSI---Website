import React from "react";
import '../css/section.css'

interface SectionProps {
    title?: string,
    sub?: string,
    children?: any
}

export default function section({ children, title, sub }: SectionProps) {
    return (
        <div className='section'>
            <div className='title-area'>
                <span>{sub}</span>
                <h3>{title}</h3>
            </div>
            {children}
        </div>
    )
}
