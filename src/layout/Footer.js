export default function Footer(){
    return(
        <div className="container-fluid nav-own">
            <footer className="py-3">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-light">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-light">About</a></li>
                </ul>
                <p className="text-center text-light">© {new Date().getFullYear()} Company, Inc</p>
            </footer>
        </div>
    )
}