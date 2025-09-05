import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='text-center justify-center items-center  min-h-screen'>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">
                <button className="btn btn-primary my-5">Return Home</button>
            </Link>
        </div>
    )
}