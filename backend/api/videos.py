import os
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/v1/content", tags=["content"])

VIDEO_CDN_BASE = os.getenv("VIDEO_CDN_BASE", "http://localhost:5173/videos")

class VideoSources(BaseModel):
    source_1080p: str
    source_720p: str
    source_480p: str
    poster: str
    webm: str

class VideoManifest(BaseModel):
    hero: VideoSources

@router.get("/hero", response_model=VideoManifest)
async def get_hero_manifest():
    b = VIDEO_CDN_BASE
    return VideoManifest(
        hero=VideoSources(
            source_1080p=f"{b}/hero-main-1080p.mp4",
            source_720p=f"{b}/hero-main-720p.mp4",
            source_480p=f"{b}/hero-main-480p.mp4",
            poster=f"{b}/hero-poster.jpg",
            webm=f"{b}/hero-main.webm",
        )
    )