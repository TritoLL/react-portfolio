import ThemeToggler from "./ThemeToggler";

const HeaderControls = ({ theme, toggleTheme }) => (
    <div className="header-controls">
        <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
        <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
    </div>
);

export default HeaderControls;
