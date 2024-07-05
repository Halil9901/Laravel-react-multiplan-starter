<?php

// app/Http/Resources/FileResource.php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class FileResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'filename' => $this->filename,
            'path' => $this->path,
            'type' => $this->type,
           // 'url' => Storage::disk('s3')->url($this->path),
            'url' => Storage::disk('s3')->temporaryUrl($this->path, now()->addMinutes(360)),
        ];
    }
}

