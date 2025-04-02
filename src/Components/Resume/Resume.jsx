
function Resume() {
  const handleDownload = () => {
    const resumeUrl = "/Resume.pdf"; // Ensure resume.pdf is in the public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='resume'  className="flex flex-col justify-center items-center text-center text-white font-bold pb-20 w-full h-screen px-4">
      <h1 className="font-bold text-3xl mb-4">Press Download for Resume.pdf</h1>
      <button
        onClick={handleDownload}
        className="px-4 py-2 rounded-lg shadow-lg bg-red-600 text-white hover:bg-red-700 transition duration-300"
      >
        Download
      </button>
    </div>
  );
}

export default Resume;
