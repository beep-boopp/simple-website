// Contract details
const contractAddress = "0x9396B453Fad71816cA9f152Ae785276a1D578492"; // Paste your contract address here
const contractABI = [
  "function upvote() external",
  "function downvote() external",
  "function getVotes() external view returns (uint256, uint256)"
];

// Connect to MetaMask and initialize contract
async function connect() {
  if (!window.ethereum) return alert("Please install MetaMask!");
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []); // Request account access
  const signer = provider.getSigner();
  return new ethers.Contract(contractAddress, contractABI, signer);
}

// Update vote counts
async function updateVotes(contract) {
  const [upvotes, downvotes] = await contract.getVotes();
  document.getElementById('upvote-count').textContent = upvotes;
  document.getElementById('downvote-count').textContent = downvotes;
}

// Initialize
(async () => {
  const contract = await connect();
  await updateVotes(contract);

  // Upvote
  document.getElementById('upvote').addEventListener('click', async () => {
    await contract.upvote();
    await updateVotes(contract);
  });

  // Downvote
  document.getElementById('downvote').addEventListener('click', async () => {
    await contract.downvote();
    await updateVotes(contract);
  });
})();