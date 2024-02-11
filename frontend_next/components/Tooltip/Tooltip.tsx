// Style
import './Tooltip.scss'

type Props = {
    message: string;
    children: React.ReactNode;
}

const Tooltip = ({ message, children }: Props) => {
    return (
        <div className="group tooltip-container">
            {children}
            <span className="tooltip scale-0 group-hover:scale-100">{message}</span>
        </div>
    )
}

export default Tooltip;