export default function SidebarSection({ title, children }) {
    return (
        <div>
            <div className="uppercase text-2xl font-light mb-1">{title}</div>
            <div>
                {children}
            </div>
        </div>
    );
}