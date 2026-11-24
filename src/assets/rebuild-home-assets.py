"""Regenerate the display font and homepage icons from their checked-in originals.

Run from the repository root:
    uv run --with 'fonttools[woff]==4.68.0' --with 'brotli==1.2.1' --with 'pillow==13.0.0' python src/assets/rebuild-home-assets.py
"""

import base64
from io import BytesIO
from pathlib import Path
from xml.etree import ElementTree

from fontTools import subset
from PIL import Image


ASSETS = Path(__file__).resolve().parent
# 新增隶书标签时在这里补字。
DISPLAY_TEXT = (
    "光遇·复刻档案馆"  # 首页标题，也用于导航
    "关于tensorflow"  # 其余导航链接
    "预测结果历史复刻先祖图鉴"  # 档案页的三个标签
)


def rebuild_display_font():
    font_dir = ASSETS / "css"
    options = subset.Options(flavor="woff2", ignore_missing_unicodes=False)
    options.drop_tables += ["FFTM"]
    font = subset.load_font(font_dir / "CTLiShuSF.woff2", options)
    subsetter = subset.Subsetter(options=options)
    subsetter.populate(text=DISPLAY_TEXT)
    subsetter.subset(font)
    subset.save_font(font, font_dir / "CTLiShuSF-display.woff2", options)


def rebuild_season_icons():
    icon_dir = ASSETS / "img" / "icon"
    for season in range(1, 13):
        source = icon_dir / f"season{season}_x.svg"
        svg = ElementTree.parse(source)
        png_uri = svg.find(".//{http://www.w3.org/2000/svg}image").attrib["href"]
        with Image.open(BytesIO(base64.b64decode(png_uri.split(",", 1)[1]))) as png:
            icon = png.convert("RGBA")
            # 60px × 1.8 hover scale × 2 device pixel ratio.
            icon.thumbnail((216, 216), Image.Resampling.LANCZOS)
            icon.save(source.with_suffix(".webp"), format="WEBP", quality=86, method=6)


if __name__ == "__main__":
    rebuild_display_font()
    rebuild_season_icons()
